import { apiMiddleware } from 'redux-api-middleware';
import {logger} from "./logger";

export default [
    apiMiddleware,
    logger,
];
