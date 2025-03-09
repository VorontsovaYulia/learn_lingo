import Select, { components } from "react-select";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './LanguageSelect.module.css'

export const LanguageSelect = ({ options, selected, setSelected }) => {

  const formattedOptions = options.map((lang) => ({
    value: lang,
    label: lang,
  }));

  // Кастомні стили для React Select
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#fff",
            borderRadius: "14px",
            padding: "5px",
            boxShadow: state.isFocused ? "0 0 5px rgba(0, 0, 0, 0.2)" : "none",
            border: "none",
        }),
        option: (provided, { isDisabled, isSelected }) => ({
            ...provided,
            fontWeight: isSelected ? "500" : "500",
            color: isSelected ? "#000" : "rgba(18, 20, 23, 0.2)",
            opacity: isDisabled ? 0.5 : 1,
            backgroundColor: "transparent",
            cursor: isDisabled ? "not-allowed" : "pointer",
            ":hover": {
                backgroundColor: "#f4f4f4",
            },
        }),
        menu: (provided) => ({
            ...provided,
            fontSize: '18px',
            lineHeight: '20px',
            borderRadius: "12px",
            padding: "5px",
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: "160px",
            overflowY: "auto",
        }),
        singleValue: (provided) => ({
            ...provided,
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: "500",
        }),
    };
    
    // Кастомна стрілка в селекті
    const DropdownIndicator = (props) => {
        const { menuIsOpen } = props.selectProps;
        return (
            <components.DropdownIndicator {...props}>
                {menuIsOpen ? <KeyboardArrowUpIcon size={18} /> : <KeyboardArrowDownIcon size={18} />}
            </components.DropdownIndicator>
        );
    };

    return (
        <div className={styles.select}>
            <label>Languages</label>
            <Select
                options={formattedOptions}
                styles={customStyles}
                value={{ value: selected, label: selected }}
                onChange={(selectedOption) => setSelected(selectedOption.value)}
                isSearchable={false} 
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator,
                }}
            />
        </div>
    );
};