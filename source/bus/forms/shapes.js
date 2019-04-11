// Core
import { object, string } from 'yup';

export const scheduler = {
    shape: {
        todo: '',
    },
    schema: object().shape({
        todo: string()
            .required()
            .min(1),
    }),
};
