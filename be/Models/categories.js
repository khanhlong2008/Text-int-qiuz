const mongoose = require("mongoose");
const intQuizSchema = new mongoose.Schema({
  categoriesCollection: {
    items: [
      {
        sys: {
          id: String,
        },
        displayName: {
          type: String,
          required: true,
        },
        avatarUrl: {
          title: String,
          url: String,
        },
      },
    ],
  },
});
const int_quiz = mongoose.model("int_quiz", intQuizSchema);

module.exports = {
  int_quiz,
};
