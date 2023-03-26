const flowSheetCat = [
    {category_id: 'ba4c562f-d288-476d-8f7c-1e32d1317521', category_name: 'Vitals', description: ''},
    {category_id: '18526ccb-ce80-4a83-a0ea-85bd1845bcaf', category_name: 'General Examination', description:''}
];
const flowSheetCatItem = [
    {category_ref:'ba4c562f-d288-476d-8f7c-1e32d1317521', item_key:'pulse', item_name: 'Pulse', value:'10', min_value: 0, max_value: 999,  value_unit: '/min', value_type: 'Int', extra_params: [
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
      {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
      {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
      {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
      {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
    {category_ref:'ba4c562f-d288-476d-8f7c-1e32d1317521', item_key:'bp', item_name: 'Blood Pressure', value:'20', min_value: 0, max_value: 300,  value_unit: 'mmHg',  value_type: '', extra_params:[
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Arm", "Left Arm", "Right Leg", "Left Leg", "Invasive Arterial"]},
      {name: "Position", description: "Site of measurement", value:'', options: ["Sitting", "Supine", "Propt up", "Standing"]},
      {name: "Medications", description: "Active medications", value:'', options: ["Dolo - 650", "Dolo - 250"]},
    ]},
    {category_ref:'ba4c562f-d288-476d-8f7c-1e32d1317521', item_key:'rr', item_name: 'Respiratory Rate', value:'30', min_value: 0, max_value: 200,  value_unit: '/min',  value_type: '', extra_params:[
      {name: "Position", description: "Position while measurement", value:'', options: ["Sitting", "Supine", "Propt up", "Standing"]},
      {name: "Pattern", description: "Breathing pattern", value:'', options: ["Normal", "Abdomino Thoracic", "Thoraco Abdominal", "Cheyne Stroke's", "Boit's", "Kussmaul's", "Apneustic", "Hyperpnoea"]},
    ]},
    {category_ref:'ba4c562f-d288-476d-8f7c-1e32d1317521', item_key:'SPO2', item_name: 'Oxygen Saturation SPO2', value:'96', min_value: 0, max_value: 101,  value_unit: '%',  value_type: '', extra_params:[
      {name: "Position", description: "Position while measurement", value:'', options: ["Sitting", "Supine", "Propt up", "Standing"]},
      {name: "Delivery", description: "Oxygen delivery", value:'', options: ["Room Air", "Oxygen Support", "Non Invasive mech.ventilation", "Invasive T piece Ventilation", "Invasive mech.ventilation"]},
    ]},
    {category_ref:'ba4c562f-d288-476d-8f7c-1e32d1317521', item_key:'temp', item_name: 'Temperature', value:'98', min_value: 0, max_value: 130,  value_unit: 'fahrenheit',  value_type: '', extra_params:[
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Axillary", "Oral", "Forhead skin", "Anal"]},
      {name: "Pattern", description: "Breathing pattern", value:'', options: ["Continuous", "Remittent", "Intermittent", "Relapsing"]},
    ]},
    
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'height', item_name: 'Height', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'weight', item_name: 'Weight', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'skin', item_name: 'Skin', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'nails', item_name: 'Nails', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'pallor', item_name: 'Pallor', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'jaundice', item_name: 'Jaundice', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'cyanosis', item_name: 'Cyanosis', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'PedalEdema', item_name: 'Pedal Edema', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'edema', item_name: 'Edema', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'lumps', item_name: 'Lumps / Lymph nodes', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'facial', item_name: 'Facial appearance', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
    {category_ref:'18526ccb-ce80-4a83-a0ea-85bd1845bcaf', item_key:'gait', item_name: 'Gait', value:'', min_value: '', max_value: '',  value_unit: '',  value_type: '', extra_params:[]},
];

const flowSheetReadingData = [
    {reading_id:"", encounter_ref:"", encounter_by:"", reading_time:"03/09/2022, 11:37:39", category_name:"", item_key:"pulse", value:'20', value_unit:"", extra_params:[
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
      {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
      {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
      {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
      {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
    {reading_id:"", encounter_ref:"", encounter_by:"", reading_time:"04/09/2022, 11:37:39", category_name:"", item_key:"pulse", value:'30', value_unit:"", extra_params:[
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
      {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
      {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
      {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
      {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
    {reading_id:"", encounter_ref:"", encounter_by:"", reading_time:"05/09/2022, 11:37:39", category_name:"", item_key:"pulse", value:'40', value_unit:"", extra_params:[
      {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
      {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
      {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
      {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
      {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
    {reading_id:"", encounter_ref:"", encounter_by:"", reading_time:"05/09/2022, 11:37:39", category_name:"", item_key:"dp", value:'40', value_unit:"", extra_params:[
        {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
        {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
        {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
        {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
        {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
    {reading_id:"", encounter_ref:"", encounter_by:"", reading_time:"05/09/2022, 11:37:39", category_name:"", item_key:"rr", value:'40', value_unit:"", extra_params:[
        {name: "Measurement", description: "Site of measurement", value:'', options: ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A"]},
        {name: "Character", description: "An impression of the pulse waveform or shape", value:'', options: ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"]},
        {name: "Volume", description : "The perceived degree of pulsation", value:'', options: ["Normal", "Increased", "Low"]},
        {name: "Rhythm", description: "The pattern or regularity of pulses", value:'', options: ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"]},
        {name: "Tension", description: "It corresponds to diastolic blood pressure", value:'', options: ["Normal", "Increased", "Low"]}
    ]},
];

const Headers = ["", "03/09/2022, 11:37:39", "04/09/2022, 11:37:39"];

const Categories = [
    {
        "category_name" : "Vitals", 
        "data": [
            { header: 'Pulse' },
            { header: 'Blood Pressure' },
            { header: 'Respiratory Rate' },
            { header: 'Oxygen Saturation SPO2' },
            { header: 'Temperature' }
        ]
    },
    {
        "category_name" : "General Examination", 
        "data": [
            { header: 'Height' },
            { header: 'Weight' },
            { header: 'Skin' },
            { header: 'Nails' },
            { header: 'Pallor' },
            { header: 'Jaundice' },
            { header: 'Cyanosis' },
            { header: 'Pedal Edema' },
            { header: 'Edema' },
            { header: 'Lumps / Lymph nodes' },
            { header: 'Facial appearance' },
            { header: 'Gait' },
        ]
    },

];

const CatData = {
    "Pulse": [
        {"reading_date" : "03/09/2022, 11:37:39", "value": 72, "detail": [
                {"name" : "Measurement", "description": "Site of measurement", "value": "Right Radial Artery"}, 
                {"name" : "Character", "description": "An impression of the pulse waveform or shape", "value": "Normal"}, 
                {"name" : "Volume", "description" : "The perceived degree of pulsation", "value": "Increased"}, 
                {"name" : "Rhythm", "description": "The pattern or regularity of pulses", "value": "Sinus Arrhythmia"}, 
                {"name" : "Tension", "description": "It corresponds to diastolic blood pressure", "value": "Increased"}
            ]
        },
        {"reading_date" : "04/09/2022, 11:37:39", "value": 70, "detail": [
                {"name" : "Measurement", "description": "Site of measurement", "value": "Right Radial Artery"}, 
                {"name" : "Character", "description": "An impression of the pulse waveform or shape", "value": "Normal"}, 
                {"name" : "Volume", "description" : "The perceived degree of pulsation", "value": "Increased"}, 
                {"name" : "Rhythm", "description": "The pattern or regularity of pulses", "value": "Sinus Arrhythmia"}, 
                {"name" : "Tension", "description": "It corresponds to diastolic blood pressure", "value": "Increased"}
            ]
        }
    ],
    "Blood Pressure":[
        {"reading_date" : "03/09/2022, 11:37:39", "value": "70/120", "detail": [
                {"name" : "Measurement", "description": "Site of measurement", "value": "Right Arm"}, 
                {"name" : "Position", "description": "Position while measurement", "value": "Sitting"}, 
                {"name" : "Medications", "description" : "Active medications", "value": "Dolo - 650"}
            ]
        },
        {"reading_date" : "04/09/2022, 11:37:39", "value": "70/120", "detail": [
                {"name" : "Measurement", "description": "Site of measurement", "value": "Right Arm"}, 
                {"name" : "Position", "description": "Position while measurement", "value": "Sitting"}, 
                {"name" : "Medications", "description" : "Active medications", "value": "Dolo - 650"}
            ]
        }
    ],
    "Respiratory Rate":[
        {"reading_date" : "03/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Position", "description": "Position while measurement", "value": "Sitting"}, 
                {"name" : "Pattern", "description" : "Breathing pattern", "value": "Abdomino Thoracic"}
            ]
        },
        {"reading_date" : "04/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Position", "description": "Position while measurement", "value": "Propt up"}, 
                {"name" : "Pattern", "description" : "Breathing pattern", "value": "Thoraco Abdominal"}
            ]
        }
    ],
    "Oxygen Saturation SPO2":[
        {"reading_date" : "03/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Position", "description": "Position while measurement", "value": "Supine"}, 
                {"name" : "Delivery", "description" : "Oxygen delivery", "value": "Oxygen Support"}
            ]
        },
        {"reading_date" : "04/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Position", "description": "Position while measurement", "value": "Standing"}, 
                {"name" : "Delivery", "description" : "Oxygen delivery", "value": "Room Air"}
            ]
        }
    ],
    "Temperature":[
        {"reading_date" : "03/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Measurement", "description": "Site of measurement", "value": "Forehead skin"}, 
                {"name" : "Pattern", "description" : "Oxygen delivery", "value": "Intermittent"}
            ]
        },
        {"reading_date" : "04/09/2022, 11:37:39", "value": "70/120", "detail": [ 
                {"name" : "Measurement", "description": "Site of measurement", "value": "Axillary"}, 
                {"name" : "Pattern", "description" : "Temperature Pattern", "value": "Continuous"}
            ]
        }
    ],
}

const Assets = {
    "Pulse": {
        "Measurement": ["Right Radial Artery", "Left Radial Artery", "Brachial A", "Carotid A", "Femoral A", "Dorsalis Pedis A", "Popliteal A", ""],
        "Character": ["Normal", "Collapsing", "Slow rising", "Pulsus Bisferens", "Pulsus parvus et tardus", "Pulsus alternans", "Pulsus bigeminus", "Anacrotic", "Diacrotic", "Pulsus paradoxus"],
        "Volume": ["Normal", "Increased", "Low", ""],
        "Rhythm": ["Regular", "Sinus Arhythmia", "Regularly Irregular", "Irregularly Irregular"],
        "Tension": ["Normal", "Increased", "Low"],
    }, 
    "BP":{
        "Measurement": ["Right Arm", "Left Arm", "Right Leg", "Left Leg", "Invasive Arterial"],
        "Position": ["Sitting", "Supine", "Propt up", "Standing"], 
    },
    				
    "RRate":{ 
        "Position": ["Sitting", "Supine", "Propt up", "Standing"], 
        "Pattern": ["Normal", "Abdomino Thoracic", "Thoraco Abdominal", "Cheyne Stroke's", "Boit's", "Kussmaul's", "Apneustic", "Hyperpnoea"], 
    },
    				
    "SPO2": {
        "Position": ["Sitting", "Supine", "Propt up", "Standing"],
        "Delivery": ["Room Air", "Oxygen Support", "Non Invasive mech.ventilation", "Invasive T piece Ventilation", "Invasive mech.ventilation"], 
    },
    			
    "Temperature": {
        "Measurement": ["Axillary", "Oral", "Forhead skin", "Anal"],
        "Pattern": ["Continuous", "Remittent", "Intermittent", "Relapsing"], 
    }
};

export {flowSheetCat, flowSheetCatItem, flowSheetReadingData, Headers, Categories, CatData, Assets};
