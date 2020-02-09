<div className='show-container' onClick={()=> {if(dropdown)toggleDropdown(false)}}>
            {form && <Form page='show'/>}
            <Tools page='show'/>
            <div className='table'>
                <div className='head'>
                    <div className='th' id='orange'>Activity</div>
                    <div className='th'>Type</div>
                    <div className='th'>Address</div>
                    <div className='th'>Website</div>
                    <div className='th'>Interest</div>
                    <div className='th'>Schedule</div>
                </div>
                <div className='body'>
                    {/* render planning rows */}
                    {itinerary && tableIndex === 0 && itinerary.planning_rows.map(planningRow => {
                        return (
                            <Row type='planning' key={planningRow.id}/>
                        )
                    })}
                    {/* render scheduling rows */}
                    {itinerary && tableIndex > 0 && itinerary.scheduling_rows.map(schedulingRow => {
                        return (
                            // only render matching dates
                            itinerary.dates[tableIndex] === schedulingRow.date && <Row type='' key={schedulingRow.id}/>
                        )
                    })}
                </div>
            </div>
        </div>