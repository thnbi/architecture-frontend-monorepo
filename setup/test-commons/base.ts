import type {Config} from '@jest/types';
import path from 'path';

// Sync object
const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        '\\.[jt]sx?$': ['babael-jest', {
            configFile: path.resolve(_dirname, '.babelrc'),
        }],
    }
};

export default config;
