import React from 'react';

class TabPage extends React.Component {

    constructor(props){
        super(props);

        this.state = { currentTab: 'A' };
    }

    showTab(tab, contents){
        if (this.state.currentTab === tab)
            return contents;
        return null;
    }

    render(){

        const selectTab = tabCode => 
            this.setState({ currentTab: tabCode });

        return (
            <div>
                <div className="tabTitles">
                    <div onClick={() => selectTab('A')}>Tab 1</div>
                    <div onClick={() => selectTab('B')}>Tab 2</div>
                    <div onClick={() => selectTab('C')}>Tab 3</div>
                </div>
                <hr />
                { this.state.currentTab === 'A' ?
                        (<div>contenuto tab 1</div>) : null } 
                        
                { (() => {
                    if (this.state.currentTab === 'B') {
                        return <div>contenuto tab 2</div>;
                    }
                })()}
                
                {this.showTab('C', 
                    <div>contenuto tab 3</div>
                )}
                
            </div>
        );
    }
}

export default TabPage;