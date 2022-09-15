const { int_quiz } = require("../Models");

const index = async (req, res, next) => {
  const IQ = await int_quiz.find({});
  return res.status(200).json({ IQ });
};
const GetIdByDisplayName = async (req, res) => {
  try {
    const { id } = req.params;
    const idByDisplayName = await int_quiz.findById(id);
    return res.status(200).json({ idByDisplayName });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
const GetByDisplayName = async (req, res, next) => {
  try {
    const { displayName } = req.body;
    // console.log(displayName);
    const exitCategory = await int_quiz.findOne({
      displayName: displayName,
    });
    return res.status(200).json({ exitCategory });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
// const GetByDisplayNameCategories = async (req, res, next) => {
//   try {
//     const { displayName } = req.body;
//     console.log(displayName);
//     const exitCategory = await int_quiz.findOne({
//       displayName: displayName,
//     });
//     return res.status(200).json({ exitCategory });
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
const getAdvisorsByStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (status === "online") {
      const exitStatus = await int_quiz.find({
        status: "online",
      });
      return res.status(200).json({ exitStatus });
    } else {
      const exitStatus = await int_quiz.find({
        status: "offline",
      });
      return res.status(200).json({ exitStatus });
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
module.exports = {
  index,
  GetIdByDisplayName,
  GetByDisplayName,
  getAdvisorsByStatus,
  // GetByDisplayNameCategories,
};
