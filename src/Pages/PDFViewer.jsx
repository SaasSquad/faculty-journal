import { Viewer, Worker } from '@react-pdf-viewer/core';
import api from '../api/Api';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'
import { useState } from 'react';
// import '@react-pdf-viewer/core/lib/styles/index.css'
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'

const PDFViewer = ({ file }) => {

    return (
        <div style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '750px',
        }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl={file} />
            </Worker>
        </div>

    )
};

export default PDFViewer;
