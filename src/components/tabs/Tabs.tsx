import React, { useState } from 'react'

const Tabs = () => {
    const [tabIndex, setTabIndex] = useState<number>(0)

    return (
        <>
            {/* tabe index */}

            <div className="Tabs flex items-center">

                {/* tab Head */}
                <div className="tabslist">
                    <div className="tabhead" onClick={() => setTabIndex(0)}>Administrators</div>
                    <div className="tabhead" onClick={() => setTabIndex(1)}>App Users</div>
                </div>

                {/* Tab Content */}
                <div className="tabContent" hidden={tabIndex != 0}>
                    Administrators Content and beyond
                </div>
                <div className="tabContent" hidden={tabIndex != 1}>
                    App User Content and beyound
                </div>
            </div>
        </>
    )
}

export default Tabs