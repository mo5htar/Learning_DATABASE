const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.CreateUser = catchAsync(async (req, res, next) => {
  let { name, age, courseId } = req.body;

  if (!name || !age || !email || !password || !courseId) {
    next(new AppError("Please provide all information ", 401));
  }

  const query = `insert into users values(${name},${age},${email},${password},${courseId})`;
  const ans = await db.execute(query);
  res.send({
    msg: "user added successfully!",
    user: { id: ans.id, name, age, courseId },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  if (!req.param.id) return next(new AppError("not user is exites!", 404));

  const query = `select u.name from users u where id=${req.param.id} join cours c u.courseId=c.id `;
  const ans = await db.execute(query);
  if (!ans) return next(new AppError("no user is exites!!", 404));

  res.send({
    status: "success",
    user,
  });
});

exports.delteUser = catchAsync(async (req, res, next) => {
  if (!req.param.id) return next(new AppError("not user is exites!", 404));

  const query = `delete from users where id=${req.param.id} `;
  const ans = await db.execute(query);
  if (!ans) return next(new AppError("no user is exites!!", 404));

  res.status(200).json({
    status: "success",
    msg: "User is deleted",
  });
});
