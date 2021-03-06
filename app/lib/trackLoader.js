import path from 'path';

import { showOpenDialog } from 'lib/dialog.js';
import { load } from 'lib/mediaFileLoader.js';
import config from 'config';

export default {
    loadFromDialog() {
        return new Promise((resolve, reject) => {
            showOpenDialog({
                properties: [
                    'openFile',
                    'openDirectory',
                    'multiSelections'
                ],
                filters: [
                    {
                        name: 'Audio',
                        extensions: config.formats
                    }
                ]
            }, (files) => {
                load(files).then(resolve).catch(reject);
            });
        });
    },

    loadFromDrop(files) {
        const audioFiles = files.filter((f) => {
            const extName = path.extname(f);

            return extName && config.formats.includes(extName.slice(1));
        });

        return load(audioFiles);
    }
};
