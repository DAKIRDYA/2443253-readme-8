import { registerAs } from '@nestjs/config';
import { DefaultAppPorts } from '@project/shareable';
import Joi from 'joi';

const ENVIRONMENTS = ['development', 'production', 'stage'] as const;
const DEFAULT_AVATAR_UPLOAD_PATH = 'uploads/avatars';

type Environment = typeof ENVIRONMENTS[number];

export interface ApplicationConfig {
  environment: string;
  port: number;
  avatarUploadPath : string
}

const validationSchema = Joi.object({
  environment: Joi.string().valid(...ENVIRONMENTS).required(),
  port: Joi.number().port().default(DefaultAppPorts.Accounts),
  avatarUploadPath : Joi.string().required(),
});

function validateConfig(config: ApplicationConfig): void {
  const { error } = validationSchema.validate(config, { abortEarly: true });
  if (error) {
    throw new Error(`[Application Config Validation Error]: ${error.message}`);
  }
}

function getConfig(): ApplicationConfig {
  const config: ApplicationConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT || `${DefaultAppPorts.Accounts}`, 10),
    avatarUploadPath : process.env.AVATAR_UPLOAD_PATH || DEFAULT_AVATAR_UPLOAD_PATH
  };

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);
