import dotenv from 'dotenv';
import User from '../models/user.model.js';
import cohere from '../utils/cohere.js';

dotenv.config();

export const putParams = async (req, res) => {
    try {
        const { uid, text } = req.body;

        const prompt = `
        User's data to be analyzed: ${text}
You are a sophisticated language model designed to evaluate user-provided texts. Your task is to assess the given text based on various parameters, providing a detailed analysis of the user's actions. Consider the following instructions and additional parameters:

1. Merits (out of 100): Evaluate the positive impact of the user's actions on society. Award a score out of 5, with 5 being highly beneficial and 0 being no positive impact. Consider societal benefits, environmental impact, and overall positive contributions.

2. Efforts Taken (out of 100): Assess the efforts the user mentions in taking the action. Give a score out of 5, considering the scale, methods, and any challenges faced. Examine the level of commitment and dedication to the cause.

3. Environmental Impact (out of 100): Evaluate the user's actions in terms of their impact on the environment. Consider aspects like waste reduction, ecological sustainability, and conservation efforts.

4. Community Engagement (out of 100): Assess the level of community involvement in the user's actions. Consider collaboration with local residents, engagement with community members, and the overall community impact.

5. Innovation (out of 100): Evaluate the innovative aspects of the user's actions. Consider any creative solutions, novel approaches, or unique methods used in the process.

6. Total Impacts (out of 100): Calculate the total impacts using the formula: 

\[ TI = (3 \times \text{Merits}) + (3 \times \text{Efforts Taken}) + (2 \times \text{Environmental Impact}) + (2 \times \text{Community Engagement}) + (2 \times \text{Innovation}) \]

Ensure to provide detailed and constructive feedback, especially in cases of incomplete information or unclear intentions. Use clear and concise language in your evaluation. Consider the words like plantation, cleaning drive, 
and community service. Provide a comprehensive analysis of the user's actions, highlighting the positive aspects and areas for improvement. Ensure to maintain a positive and encouraging tone throughout the evaluation and consider 
all of this as good activities and give high marks to them. Also, collaboration and any activity that impacts other people's lives positively should be given high marks.  

Example of positive words are justice, kindness, liberty, donation, charity, volunteer, love, humanity, peace, equality, freedom, respect, dignity, etc. Do not give me any kind of text as a response. Just give me the parameters along with the values only in json format. Strictly follow the instructions and give me the parameters in the json format only. 
The parameters should be in the following format: 
{
    merits: 80,
    efforts_taken: 90,
    environmental_impact: 67,
    community_engagement: 59,
    innovation: 96,
    total_impacts: apply the formula here
}

remove the backslashes and the brackets between the parameters.
Do not give me any kind of text as a response. Just give me the parameters along with the values only in json format. Strictly follow the instructions and give me the parameters in the json format only, not matter what. 
`;

        const response = await cohere.generate({
            prompt,
            max_tokens: 50,
        });

        const jsonResponse = JSON.parse(response.generations[0]?.text);

        const user = await User.create({
            uid: uid,
            parameters: jsonResponse,
        });

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

export const getParams = async (req, res) => {
    try {
        console.log(req.body);
        const { uid } = req.body;

        const user = await User.find({ uid: uid });

        console.log(user);

        if (!user) {
            return res.status(404).json({
                success: false,
                error: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            data: user[0],
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};