import React, {useState} from 'react';
import PropTypes from 'prop-types';
// Componentes Material Ui
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// Componentes
import EuroComponent from '../monedas/EuroComponent';
import DolarComponent from '../monedas/DolarComponent';
import LibraComponent from '../monedas/LibraComponent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
        {value === index && (
          <Box p={3}>
            <span>{children}</span>
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabPanelComponent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return ( 
        <>
            <div className="tabpanel">
                <AppBar position="static" className="tab-bar">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                        <Tab label="Euro" {...a11yProps(0)} />
                        <Tab label="USD" {...a11yProps(1)} />
                        <Tab label="GBP" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <EuroComponent />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DolarComponent />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <LibraComponent />
                </TabPanel>
            </div>
        </>
     );
}
 

export default TabPanelComponent;