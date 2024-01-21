const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, `../../.env.${process.env.NODE_ENV}`) });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid( 'example', 'dev', 'sit', 'prod').default('prod'),
        HOST: Joi.alternatives().try(Joi.string().ip(),Joi.string().uri()).default('127.0.0.1'),
        PORT: Joi.number().default(3000),
        MONGODB_URL: Joi.string().required().description('Mongo DB url'),
        MONGODB_USERNAME: Joi.string().allow('').description('Mongo DB username'),
        MONGODB_PASS: Joi.string().allow('').description('Mongo DB password'),
        
    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);


if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
	env: envVars.NODE_ENV,
	host: envVars.HOST,
	port: envVars.PORT,
	mongoose: {
		url: envVars.MONGODB_URL, //+ (envVars.NODE_ENV === 'test' ? '-test' : ''),
		options: {
            auth: {
                username: envVars.MONGODB_USERNAME,
                password: envVars.MONGODB_PASS,
            },
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
	}
};