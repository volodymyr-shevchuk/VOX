import PureRenderMixin from 'react-addons-pure-render-mixin';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import styles from './Footer.styl';

export default class Footer extends React.Component {

    static displayName = 'Footer';

    static propTypes = {
        trackCount: React.PropTypes.number.isRequired,
        totalDuration: React.PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const { trackCount, totalDuration } = this.props;
        const momentDuration = moment.duration(totalDuration, 'seconds');

        return (
            <div className={styles.wrap}>
                <FormattedMessage
                    id='footer.total'
                    values={{
                        totalCount: trackCount,
                        min: momentDuration.minutes(),
                        sec: momentDuration.seconds()
                    }}
                />
            </div>
        );
    }

}
