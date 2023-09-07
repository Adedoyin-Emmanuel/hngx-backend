const Joi = require("joi");

class IndexController {
  static async getRequest(req, res) {
    try {
      const requestSchema = Joi.object({
        slack_name: Joi.string().required(),
        track: Joi.string().required(),
      });

      const result = requestSchema.validate(req.query);

      const { value, error } = result;

      if (error) {
        return res.status(400).send({
          status_code: 400,
          message: error.details[0].message,
        });
      }

      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const currentDate = new Date();
      const dayIndex = currentDate.getDay();
      const currentDayOfWeek = dayNames[dayIndex];
      const formattedUtcTime = `${currentDate.getUTCFullYear()}-${(
        currentDate.getUTCMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${currentDate
        .getUTCDate()
        .toString()
        .padStart(2, "0")}T${currentDate
        .getUTCHours()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getUTCMinutes()
        .toString()
        .padStart(2, "0")}:${currentDate
        .getUTCSeconds()
        .toString()
        .padStart(2, "0")}Z`;
      res.status(200).send({
        slack_name: value.slack_name,
        current_day: currentDayOfWeek,
        utc_time: formattedUtcTime,
        track: value.track,
        github_file_url:
          "https://github.com/Adedoyin-Emmanuel/hngx-backend/blob/master/index.js",
        github_repo_url: "https://github.com/Adedoyin-Emmanuel/hngx-backend",
        status_code: 200,
      });
    } catch (error) {
      return res.status(500).send({
        status_code: 500,
        message: "An unknown error occured",
      });
    }
  }
}

module.exports = IndexController;
