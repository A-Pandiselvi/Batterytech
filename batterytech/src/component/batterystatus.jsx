import React from 'react';
// Import your CSS file
import 'D:/IVW/batterytech/src/App.css'
import CircularProgressBar from './percentage';



const BatteryStatus = () => {
  const batteryData = [
    { label: 'Serial Number', value: 'BP001' },
    { label: 'Voltage', value: '47.9V' },
    { label: 'Soc', value: '68.6%' },
    { label: 'Temperature', value: '28.8C' },
    { label: 'Current', value: '7.04' },
    { label: 'Charge Rate', value: '0.72C' },
    { label: 'Discharge Rate', value: '0.45C' },
    { label: 'Health Status', value: 'Good' },
  ];

  const sells = [
    { label:'C1', value:'3.89V'},
    { label:'C2', value:'3.87V'},
    { label:'C3', value:'3.86V'},
    { label:'C4', value:'3.80V'}

  ]

  return (
    <>


    <div className="hole-container">
      
      {Array(6).fill().map((_, index) => (
        <div className="inner-container" key={index}>
        
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',textAlign:'center'}}>
      <CircularProgressBar percentage={70.6} />
    </div><br />
    
          {batteryData.map((data, i) => (
            <div className="inner-column" key={i}>
              <p>{data.label}</p>
              <p>{data.value}</p>
            </div>
            
          ))}
          
          {sells.map((data,i)=>(
            <div className='inner-column2' key={i}>
                <p>{data.label}</p>
                <p>{data.value}</p>
                </div>
          ))}
        </div>
      ))}
    </div>
 </>  
  );
};

export default BatteryStatus;
