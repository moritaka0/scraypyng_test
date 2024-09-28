import fetch from "node-fetch";
import * as cheerio from "cheerio";

const url = "http://www.1uphp.com/con1/form/checkbox.html";

async function checkCheckbox() {
  try {
    // fetchを使用してGETリクエストを送信
    const response = await fetch(url);
    const body = await response.text();

    // HTMLをcheerioでパース
    const $ = cheerio.load(body);

    // チェックボックスの状態を確認
    const isChecked = $('input[name="ck1"]').is(":checked");

    // 結果を返却
    console.log(
      `チェックボックスは ${
        isChecked ? "チェックされています" : "チェックされていません"
      }`
    );
  } catch (error) {
    console.error("エラーが発生しました:", error.message);
  }
}

checkCheckbox();
