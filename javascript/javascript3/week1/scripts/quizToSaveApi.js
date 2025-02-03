const owner = "jalilhu";
const repo = "Quiz_App";
const path = "userQuestions.json"; // Path to the JSON file
const token = "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";
const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

export async function updateFile(newContent, commitMessage = "Updated JSON file") {
    try {
        // Get the current file SHA
        const response = await fetch(apiUrl, {
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json"
            }
        });
        if (!response.ok) throw new Error(`Error fetching file: ${response.statusText}`);

        const data = await response.json();
        const sha = data.sha;

        // Prepare updated content (convert object to base64)
        const updatedContent = Buffer.from(JSON.stringify(newContent, null, 2)).toString("base64");

        // PUT request to update the file
        const updateResponse = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                Authorization: `token ${token}`,
                Accept: "application/vnd.github.v3+json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: commitMessage,
                content: updatedContent,
                sha: sha
            })
        });

        if (!updateResponse.ok) throw new Error(`Error updating file: ${updateResponse.statusText}`);

        console.log("File updated successfully!");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

