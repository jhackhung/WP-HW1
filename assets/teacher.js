$(document).ready(function () {
  function createTeacherGrid(data) {
    const grid = $("#teacherGrid");
    // console.log("teacherGrid element:", $("#teacherGrid"));
    data.forEach((teacher) => {

      const teacherCard = `
                <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div class="card h-100 shadow-sm rounded d-flex flex-column align-items-center text-center">
                    <img src="${teacher.image}" class="card-img-top mt-2 " style="width: 150px;" alt="${teacher.name}">
                    <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">${teacher.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${teacher.title}</h6>
                            <p class="card-text"><strong>辦公室:</strong> ${teacher.office}</p>
                            <span class="card-text"><a href="mailto:${teacher.email}" class="text-decoration-none">Mail</a></span>
                            <div class="text-center mt-4 activity-btn">
                                <a href="${teacher.website}" class="btn btn-primary rounded-pill shadow-sm"
                                    >Visit Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      grid.append(teacherCard);
      console.log(teacherCard);
    });
  }
  createTeacherGrid(teacher_data);
});
