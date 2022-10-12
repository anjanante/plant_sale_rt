export default function Categories({cat,selected}){
    const catSelected = cat === selected ? 'selected' : null;
    return (
        <option selected={catSelected} value={cat}>{cat}</option>
    )
}