
import './App.css';
import ModelView from './components/modelView/ModelView';
import 'bootstrap/dist/css/bootstrap.min.css';
import response from './data.json';

function App() {
  return (
    <div className="App">
      <div className='tableFixHead'>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Model name</th>
                    <th>Source class</th>
                    <th>Type of permission(model/field)</th>
                    <th>Field name</th>
                    <th>Action type</th>
                    <th>Source class</th>
                    <th>Type</th>
                    <th>Required name</th>
                    <th>Required expr</th>
                </tr>
            </thead>
            <tbody>
            {Object.values(response.models).map((model) => {
              return (
                  <ModelView model={model} />
              );
            })}
            </tbody>
        </table>
      </div> 
    </div>
  );
}

export default App;
