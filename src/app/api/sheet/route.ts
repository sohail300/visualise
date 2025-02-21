import { google } from "googleapis";
import keys from "@/spreadsheet-keys.json"; // Adjust the path if necessary

export async function GET() {
  try {
    const auth = await google.auth.getClient({
      projectId: keys.project_id,
      credentials: {
        type: "service_account",
        private_key: keys.private_key,
        client_email: keys.client_email,
        client_id: keys.client_id,
        token_url: keys.token_uri,
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "1AxuW9ar76XMaCBFVmjU9MD1VAmwZIUOS62vRuaPcI3Q",
      range: "Sheet1!A:B",
    });

    return Response.json({ data: data.data, success: true });
  } catch (e) {
    console.error(e);
    return Response.json(
      { message: "Error getting spreadsheet data", success: false },
      { status: 500 }
    );
  }
}
