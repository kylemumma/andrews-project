import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { logout } from "./../auth.js"
import GenerateBags from "./GenerateBags.js";
import ViewInventory from "./ViewInventory.js";
import AddNewDonations from "./AddNewDonations.js";
import ViewCustomers from "./ViewCustomers.js";
import ModifyCustomerList from "./ModifyCustomerList.js";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.DEBUG_MODE = true;

        this.keys = {
            GENERATE_BAGS: "generate-bags",
            VIEW_INVENTORY: "view-inventory",
            ADD_NEW_DONATIONS: "add-new-donations",
            VIEW_CUSTOMERS: "view-customers",
            MODIFY_CUSTOMER_LIST: "modify-customer-list"
        }

        this.state = {
            currentTab: this.keys.GENERATE_BAGS,
            addNewDonationState: {
                itemName: "",
                quantity: 0,
                expirationDate: "",
                category: "",
                donationSource: ""
            }
        }

        this.addNewItemOnChange = this.addNewItemOnChange.bind(this);
        this.addNewItemOnSubmit = this.addNewItemOnSubmit.bind(this);
    }

    addNewItemOnChange = (event) => {
        let tmpObj = this.state.addNewDonationState;
        tmpObj[event.target.id] = event.target.value;

        this.setState({
            addNewDonationState: tmpObj
        });
    }

    addNewItemOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.addNewDonationState);
    }

    /*
    @params tabKey the tabKey associated with the tab in which to 
                   check if it is the current tab
    @returns true if the given tab associated with the given tabKey 
             is the current tab, false otherwise
    */
    isCurrentTab(tabKey) {
        return this.state.currentTab === tabKey;
    }


    /*
    @params tabKey the tab key of the tab to change to
    @modifies this
    @effects changes the tab key to the given tabKey,
             re-rendering the page accordingly
    @throws IllegalArgumentException if the tab key is invalid
    */
    changeTab(tabKey) {
        if(this.DEBUG_MODE && !Object.values(this.keys).includes(tabKey)) {
            throw new Error(`IllegalArgumentException: invalid tab key "${tabKey}"`);
        }

        if(tabKey !== this.state.currentTab) {
            this.setState({
                currentTab: tabKey
            });
        }
    }

    /*
    @params tabKey the tab key for the desired tab
    @returns the react component for the tab associated with the given tab key
    @throws IllegalArgumentException if the tab key is invalid
    */
    getTabComponent(tabKey) {
        if(this.DEBUG_MODE && !Object.values(this.keys).includes(tabKey)) {
            throw new Error(`IllegalArgumentException: invalid tab key "${tabKey}"`);
        }

        switch(tabKey) {
            case this.keys.GENERATE_BAGS:
                return <GenerateBags />;
            case this.keys.VIEW_INVENTORY:
                return <ViewInventory />;
            case this.keys.ADD_NEW_DONATIONS:
                return <AddNewDonations onChange={this.addNewItemOnChange} onSubmit={this.addNewItemOnSubmit}/>;
            case this.keys.VIEW_CUSTOMERS:
                return <ViewCustomers />;
            case this.keys.MODIFY_CUSTOMER_LIST:
                return <ModifyCustomerList />;
            default:
                // temporary, replace with PageNotFound component
                return <h1>Error: Page not Found</h1>;
        }
    }

    render() {
        return (
            <div id="main-page">
                <Navbar bg="light" expand="md" className="navbar-right">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav variant="tabs" className="mx-auto" 
                            activeKey={this.state.currentTab} 
                            onSelect={(selectedKey) => this.changeTab(selectedKey)}
                        >
                            <Nav.Item>
                                <Nav.Link variant="tabs" eventKey={this.keys.GENERATE_BAGS} >
                                    Generate Bags
                                </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs" eventKey={this.keys.VIEW_INVENTORY} >
                                    View Inventory
                                </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs" eventKey={this.keys.ADD_NEW_DONATIONS} >
                                    Add New Donations
                                </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs" eventKey={this.keys.VIEW_CUSTOMERS} >
                                    View Customers
                                </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link variant="tabs" eventKey={this.keys.MODIFY_CUSTOMER_LIST} >
                                    Modify Customer List
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <main className="container">
                    {this.getTabComponent(this.state.currentTab)}
                </main>
            </div>
        );
    }
}

export default MainPage;