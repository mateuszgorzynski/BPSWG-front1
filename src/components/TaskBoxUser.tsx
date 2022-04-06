
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';

const DataTableBasicDemo = () => {
    const [products, setProducts] = useState([]);
    const productService = new ProductService();

    useEffect(() => {
        productService.getListSmall().then(data => setProducts(data));
    }, []); 
    return (
        <div>
            <div className="card">
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="Nazwa" header="Nazwa"></Column>
                    <Column field="Status" header="Status"></Column>
                    <Column field="Typ" header="Category"></Column>
                    <Column field="Godziny" header="Godziny"></Column>
                    <Column field="Piorytet" header="Piorytet"></Column>

                </DataTable>
            </div>
        </div>
    );
}
  
  
  
export default DataTableBasicDemo;