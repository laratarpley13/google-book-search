import React from 'react';

export default function SearchBar(props) {
    const { q, printType, filter } = props;

    return(
        <div className="searchbar">
            <form className="searchform" onSubmit={(e) => props.search(e)}>
                <div>
                    <label htmlFor="search">Search:</label>
                    <input type="text" value={q} onChange={(e) => props.updateState("q", e.target.value)} id="search" placeholder="henry" />
                </div>
                <div>
                    <label htmlFor="print-type">Print Type:</label>
                    <select id="printType" value={printType} onChange={(e) => props.updateState("printType", e.target.value)}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="magazines">Magazines</option>
                    </select>
                    <label htmlFor="filter">Book Type:</label>
                    <select id="filter" value={filter} onChange={(e) => props.updateState("filter", e.target.value)}>
                        <option value="">No Filter</option>
                        <option value="ebooks">eBooks</option>
                        <option value="free-ebooks">Free eBooks</option>
                        <option value="full">Full Text</option>
                        <option value="paid-ebooks">Paid eBooks</option>
                        <option value="partial">Partial eBooks</option>
                    </select>
                </div>
                <div>
                    <input type="submit" value="Search" />
                </div>  
             </form>
        </div>
    );
}

