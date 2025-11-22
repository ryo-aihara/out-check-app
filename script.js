document.addEventListener("DOMContentLoaded", () => {
    const iron = document.getElementById("iron");
    const gas = document.getElementById("gas");
    const cons3 = document.getElementById("cons3");
    const memo = document.getElementById("memo");
    const saveBtn = document.getElementById("saveBtn");

    // 前回の状態を読み込み
    const saved = localStorage.getItem("out-check-app");
    if (saved) {
        try {
            const data = JSON.parse(saved);
            iron.checked = !!data.iron;
            gas.checked = !!data.gas;
            cons3.checked = !!data.cons3;
            memo.value = data.memo || "";
        } catch (e) {
            console.error(e);
        }
    }

    saveBtn.addEventListener("click", () => {
        // どれか1つでも未チェックなら警告して保存しない
        if (!iron.checked || !gas.checked || !cons3.checked) {
            alert("チェックが抜けています。すべてチェックしてから保存してください。");
            return;
        }

        const data = {
            iron: iron.checked,
            gas: gas.checked,
            cons3: cons3.checked,
            memo: memo.value,
            savedAt: new Date().toISOString()
        };

        localStorage.setItem("out-check-app", JSON.stringify(data));
        alert("保存しました！");
    });
});
