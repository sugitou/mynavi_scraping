// スクレイピング関数
async function selenium_func(kw_search, csv_name, box_name) {
    let val = await eel.job_system(kw_search, csv_name, box_name)();
    for (let i = 0; i < val.length; i++) {
        let num = i + 1
        document.getElementById('com_name').value += "【" + num + "件目】" + val[i] + "\n";
    }
}

let search = document.getElementById('search')
search.addEventListener('click', () => {
    if (input_form.input_kw.value == "") {
        alert("キーワードを入力してください");
        return false;
    }else if(input_form.input_f.value == ""){
        alert("ファイル名を入力してください");
        return false;
    }else if(input_form.input_d.value == ""){
        alert("フォルダ名を入力してください");
        return false;
    }else {
        selenium_func(kw_search.value, csv_name.value, box_name.value);
        return true;
    }
})