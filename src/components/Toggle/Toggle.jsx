import "./Toggle.css";

export default function Toggle({ onClick }) {
    return (
    <label class="switch">
        <input type="checkbox" onClick={onClick}/>
        <span class="slider round"></span>
    </label>
    );
};