document.getElementById("addItem").addEventListener("click", function () {
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td contenteditable="true">날짜 입력</td>
        <td contenteditable="true">활동 입력</td>
        <td contenteditable="true">장소 입력</td>
    `;

    document.querySelector("#scheduleTable tbody").appendChild(newRow);
});
