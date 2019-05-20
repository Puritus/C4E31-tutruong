const all = {
    array: null,
    name: null,
};

window.onload = async () => {
    await getData();
    await exportData();
};

const getData = async () => {
    const taken = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    const arrays = await taken.json();
    all.array = arrays;
};

const exportData = () => {
    let ulE = document.getElementById("ulE");
    for (let i = 0; i < all.array.length; i++) {
        let eachInfo = all.array[i];
        let name = eachInfo.employee_name
        all.name = name;
        ulE.innerHTML += `
        <li>${name}<li>
        `
    };
};