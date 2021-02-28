import React from 'react'
import PropTypes from 'prop-types';
import '../style.css'

const DropDownItem: React.FC<DropDownItemProps> = (props) => {
    const { checked = false, label, onChange } = props;
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: 20 }}>
                <input checked={checked} value={label} onChange={onChange} type="checkbox" />
            </div>
            <div>{label}</div>
        </div >
    )
}


interface DropDownItemProps {
    checked: boolean;
    label: string;
    onChange?(e: any): any;
}

DropDownItem.defaultProps = {
    checked: false,
    label: '',
    onChange: undefined,
}

DropDownItem.propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
}

export default DropDownItem;