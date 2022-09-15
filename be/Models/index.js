const mongoose = require("mongoose");

const intQuizSchema = new mongoose.Schema({
  sys: {
    id: {
      type: String,
      required: true,
    },
    publishedAt: {
      type: String,
      default: new Date().getTime(),
    },
  },
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  avatarUrl: {
    title: String,
    url: String,
  },
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
  skillsCollection: {
    items: [
      {
        sys: {
          id: String,
        },
        displayName: {
          type: String,
          required: true,
        },
      },
    ],
  },
  servicesCollection: {
    items: [
      {
        sys: {
          id: String,
        },
        displayName: {
          type: String,
          required: true,
        },
      },
    ],
  },
  status: {
    type: String,
    require: true,
  },
});
const int_quiz = mongoose.model("int_quiz", intQuizSchema);

module.exports = {
  int_quiz,
};
