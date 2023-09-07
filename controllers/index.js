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

      res.status(200).send({
        slack_name: value.slack_name,
        current_day: currentDayOfWeek,
        utc_time: currentDate.toISOString(),
        track: value.track,
        github_file_url:
          "https://github.com/username/repo/blob/main/file_name.ext",
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
