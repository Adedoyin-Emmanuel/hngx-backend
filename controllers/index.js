const Joi = require("joi");

class IndexController {
  static async getRequest(req, res) {
    const requestSchema = Joi.object({
      slack_name: Joi.string(),
      track: Joi.string(),
    });

    const result = requestSchema.validateAsync(req.body);

    console.log(result);
  }
}

module.exports = IndexController;
