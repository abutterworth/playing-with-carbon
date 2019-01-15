import React, { Component } from 'react';

import { Button, ModalWrapper, Dropdown, DropdownItem } from 'carbon-components-react';
import DataTableExample from './DataTableExample';

class App extends Component {
  render() {
    return (
      <div className="App page-content">
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-12 ">
            <h1>Some headline</h1>
            <p className="bx--type-gamma .bx--spacing-xl">Lead in subtitle</p>
            <Button
              kind="secondary"
              className="some-class"
              onClick={null}
              onFocus={null}
            >
            Secondary button
            </Button>
            <Button className="some-class" onClick={null} onFocus={null}>
            Primary button
            </Button>
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-xs-6">
            <ModalWrapper
              id="transactional-passive-modal"
              handleSubmit={null}
              className="some-class"
              passiveModal={false}
              buttonTriggerText="Launch Modal"
              modalLabel="Label"
              modalHeading="DataTable with toolbar"
              selectorPrimaryFocus='.data-table-search .bx--search-input'
              shouldCloseAfterSubmit
              onBlur={null}
              onClick={null}
              onFocus={null}
              onMouseDown={null}
              onMouseEnter={null}
              onMouseLeave={null}
              onMouseUp={null}
            >
              <DataTableExample />
            </ModalWrapper>
          </div>
          <div className="bx--col-xs-6">
          <div style={{minWidth: '20em'}}>
          <Dropdown
            className="some-class"
            defaultText="Dropdown label"
            value=""
            selectedText=""
            ariaLabel="dropdown menu label"
            iconDescription=""
            onChange={(e) => {console.log(e)}}
            onOpen={(e) => {console.log(e)}}
            onClose={(e) => {console.log(e)}}
          >
          <DropdownItem itemText="Option 1" value="option1" />
          <DropdownItem itemText="Option 2" value="option2" />
          <DropdownItem itemText="Option 3" value="option3" />
          <DropdownItem itemText="Option 4" value="option4" />
          <DropdownItem itemText="Option 5" value="option5" />
          </Dropdown>
          </div>
          </div>
        </div>
        
      </div>
      </div>
    );
  }
}

export default App;
