import { selectTrack } from 'actions';
import types from 'constants/ActionTypes';

describe('actions', () => {
    describe('selectTrack', () => {
        it('should create SELECT_TRACK action', function() {
            expect(selectTrack(111, {
                resetSelected: true
            })).to.be.eql({
                type: types.SELECT_TRACK,
                id: 111,
                options: {
                    resetSelected: true
                }
            });
        });
    });
});
