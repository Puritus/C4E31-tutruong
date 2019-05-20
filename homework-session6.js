const all = {
    array: null,
    name: null,
};

window.onload = async () => {
    await getData();
    await exportData();
    viewSalary();
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
        let nameEp = eachInfo.employee_name
        all.name = nameEp;
        ulE.innerHTML += `
        <li id="${i}">${nameEp}<li>
        `
    };
};

const viewSalary = () => {
    for (let i = 0; i<all.array.length; i++){
        let list = document.getElementById(`employee_name[${i}]`);
        let salaryInfo = document.getElementById("employee_salary");
        list.addEventListener('click', () => {
            console.log(`employee_salary[${i}]`)
            salaryInfo.innerHTML = '';
            let eachUser = all.array[i];
            salaryInfo.innerHTML += `<a>Salary</a>: ${eachUser.employee_salary}`
        });
    };
};




const postMethod = () => {

    let name = document.getElementById("employee_name");
    let salary = document.getElementById("employee_salary");
    let age = document.getElementById("employee_age");
    let image = document.getElementById("profile_image");

    let post = document.getElementById("button");
    post.addEventListener("click", () => {
        console.log(name.value);
        console.log(salary.value);
        console.log(age.value);
        console.log(image.value);
    })
};
