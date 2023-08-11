import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PricingConfigList from './PricingConfigList';
import PricingConfigForm from './PricingConfigForm';
import PricingConfigDelete from './PricingConfigDelete';
import * as api from './api';

const App = () => {
  return (
    <Router>
      <div className=" h-screen mx-auto flex flex-col items-center justify-center bg-slate-400">
        <h1 className="text-2xl border-b-2 border-black pb-2">Pricing Configuration Manager</h1>
        <nav className=" divide divide-x-2 divide-slate-800 p-4 ">
          <Link className="text-xl px-5" to="/">Home</Link>
          <Link className="text-xl px-5" to="/add">Add Pricing Configuration</Link>
        </nav>
        
        <Routes>
          <Route  exact path="/" element={<PricingConfigList />} />
          <Route path="/add" element={<PricingConfigForm initialValues={{}} onSubmit={api.addPricingConfig} />} />
          <Route
            path="/edit/:id" 
            element={({ match }) => (
              <PricingConfigForm initialValues={api.getPricingConfig(match.params.id)} onSubmit={(data) => api.updatePricingConfig(match.params.id, data)} />
            )}
          />
          <Route path="/delete/:id" element={<PricingConfigDelete />} />
        </Routes>
      </div>
    </Router>
  
  );
};

export default App;
