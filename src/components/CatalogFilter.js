import React from "react";
import tesseract from "../api/tesseract";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

class CatalogFilter extends React.Component {
    state = { filter: "", options: []}

    optionMapper(opt) {
        return { id: opt.id, label: opt.name};
    }

    componentDidMount() {
        this.getOptions();
      }
    
      async getOptions() {
        const response = await tesseract.get("/catalog/data-source-types");
        let opts = response.data.results.map((opt)=>this.optionMapper(opt))
    
        this.setState({ options: opts });
      }

      render() {
          return (
            <Autocomplete
                id="type-filter"
                options={this.state.options}
                sx={{ width: 175 }}
                renderInput={(params) => <TextField {...params} label="Filter" />}
            />
          );
      }

}

export default CatalogFilter;