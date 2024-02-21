(() => {
    const Filters = (props) => {
        //This is an event handler
        let updateNewOrReturn = (clickEvent) => {
            props.updateFormState({
                newOrReturn: clickEvent.target.value,
            });
        }

        //This is an event handler
        let updateFinalsWinnerStatus = (clickEvent) => {
            props.updateFormState({
                isOnlyFinalsWinner: clickEvent.target.checked,
            });
        }
        let updateSplatlandsStatus = (clickEvent) => {
            props.updateFormState({
                isOnlySplatlands: clickEvent.target.checked,
            });
        }
        let updateShowdownStatus = (clickEvent) => {
            props.updateFormState({
                isOnlyShowdown: clickEvent.target.checked,
            });
        }
        let updateNaStatus = (clickEvent) => {
            props.updateFormState({
                isOnlyNa: clickEvent.target.checked,
            });
        }
        let updateNlStatus = (clickEvent) => {
            props.updateFormState({
                isOnlyNl: clickEvent.target.checked,
            });
        }

        return (
            <React.Fragment>
                <h2 id="h2Mobile" ><b>Filter your data here:</b></h2>
                <div className='container'>
                    <div className='row'>
                    
                        <div className='col-md-4'>
                            <b>Sort by New or Returning Teams from Splatoon 2</b>
                            <br></br>
                            <select
                                onChange={updateNewOrReturn}
                            >
                                <option value=''>&nbsp;</option>
                                <option value='New'>New</option>
                                <option value='Returning'>Returning</option>
                            </select>
                        </div>

                        <div className='col-md-4'>

                            <b>Enter the Splatlands Invitational Participant</b>
                            <br></br>
                            <input
                                type='checkbox'
                                onChange={updateSplatlandsStatus}
                            />


                        </div>

                        <div className='col-md-4'>
                                <b>Splatsville Showdown Participant</b>
                                <br></br>
                                <input
                                    type='checkbox'
                                    onChange={updateShowdownStatus}
                                />
                            </div>

                        <div className='row'>
                            

                            <div className='col-md-4'>
                                <b>North American Championship Participant</b>
                                <br></br>
                                <input
                                    type='checkbox'
                                    onChange={updateNaStatus}
                                />
                            </div>

                            <div className='col-md-4'>
                            <b>Championship Nintendo Live Participant</b>
                            <br></br>
                            <input
                                type='checkbox'
                                onChange={updateNlStatus}
                            />
                            </div>

                            <div className='col-md-4'>
                            <b>Finals Winner</b>
                            <br></br>
                            <input
                                type='checkbox'
                                onChange={updateFinalsWinnerStatus} />
                        </div>

                        </div>
                       

                    </div>
                </div>
            </React.Fragment>
        );
    }
    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Team</th>
                            <th>Enter the Splatlands Participant</th>
                            <th>Splatsville Showdown Participant</th>
                            <th>NA Championship Participant</th>
                            <th>Nl Championship Participant</th>
                            <th>New team or Returning from Splatoon 2?</th>
                            <th>Finals Winner</th>
                        </tr>
                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.team}</td>
                                    <td>{row.splatlands ? 'Yes' : 'No'}</td>
                                    <td>{row.showdown ? 'Yes' : 'No'}</td>
                                    <td>{row.na ? 'Yes' : 'No'}</td>
                                    <td>{row.nl ? 'Yes' : 'No'}</td>
                                    <td>{row.newOrReturn}</td>
                                    <td>{row.finalsWinner ? 'Yes' : 'No'}</td>
                                </tr>
                            );
                        })}

                    </tbody></table>
            </div>
        )
    }

    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);

            this.originalData = props.originalData;

            this.state = {
                newOrReturn: '',
                isOnlyFinalsWinner: false,
                isOnlySplatlands: false,
                isOnlyShowdown: false,
                isOnlyNa: false,
                isOnlyNl: false,
            };

            this.updateFormState = this.updateFormState.bind(this);

        }

        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            if (this.state.newOrReturn !== '') {
                filteredData = filteredData.filter((row) => {
                    return row.newOrReturn === this.state.newOrReturn
                });
            }

            if (true === this.state.isOnlyFinalsWinner) {
                filteredData = filteredData.filter(
                    (row) => row.finalsWinner === true
                );
            }
            if (true === this.state.isOnlySplatlands) {
                filteredData = filteredData.filter(
                    (row) => row.splatlands === true
                );
            }
            if (true === this.state.isOnlyShowdown) {
                filteredData = filteredData.filter(
                    (row) => row.showdown === true
                );
            }
            if (true === this.state.isOnlyNa) {
                filteredData = filteredData.filter(
                    (row) => row.na === true
                );
            }
            if (true === this.state.isOnlyNl) {
                filteredData = filteredData.filter(
                    (row) => row.nl === true
                );
            }

            return (
                <React.Fragment>
                    <Filters newOrReturn={this.state.newOrReturn}
                        isOnlyFinalsWinner={this.state.isOnlyFinalsWinner}
                        isOnlySplatlands={this.state.isOnlySplatlands}
                        isOnlyShowdown={this.state.isOnlyShowdown}
                        isOnlyNa={this.state.isOnlyNa}
                        isOnlyNl={this.state.isOnlyNl}
                        updateFormState={this.updateFormState} />
                    <hr />
                    <DataTable dataToDisplay={filteredData} />
                </React.Fragment>
            );

        }
    }

    const reactdatatable = [
        {
            "team": "Starburst",
            "splatlands": true,
            "showdown": true,
            "na": true,
            "nl": true,
            "newOrReturn": "Returning",
            "finalsWinner": true
        },
        {
            "team": "Jackpot",
            "splatlands": true,
            "showdown": false,
            "na": false,
            "nl": true,
            "newOrReturn": "Returning",
            "finalsWinner": true
        },
        {
            "team": "Crush Soda",
            "splatlands": false,
            "showdown": false,
            "na": true,
            "nl": true,
            "newOrReturn": "New",
            "finalsWinner": false
        },
        {
            "team": "Sayonara",
            "splatlands": false,
            "showdown": false,
            "na": true,
            "nl": false,
            "newOrReturn": "Returning",
            "finalsWinner": false
        },
        {
            "team": "Destiny Bond",
            "splatlands": false,
            "showdown": true,
            "na": true,
            "nl": false,
            "newOrReturn": "Returning",
            "finalsWinner": false
        },
        {
            "team": "Mad Titans",
            "splatlands": true,
            "showdown": false,
            "na": false,
            "nl": false,
            "newOrReturn": "Returning",
            "finalsWinner": false
        },
        {
            "team": "Ascension",
            "splatlands": false,
            "showdown": true,
            "na": false,
            "nl": false,
            "newOrReturn": "New",
            "finalsWinner": false
        },
        {
            "team": "DNA",
            "splatlands": true,
            "showdown": false,
            "na": false,
            "nl": false,
            "newOrReturn": "Returning",
            "finalsWinner": false
        },
        {
            "team": "Super P",
            "splatlands": false,
            "showdown": true,
            "na": false,
            "nl": false,
            "newOrReturn": "Returning",
            "finalsWinner": false
        },

    ];





    const container = document.getElementById('SplatChampTable');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={reactdatatable} />);
})();
