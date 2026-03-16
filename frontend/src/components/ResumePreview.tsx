import {useRef, useState, useEffect} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

// Resolve worker path via bundler so it works with subpaths/reverse proxy and correct MIME.
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

type ResumePreviewProps = {
    file: string | File;
    pageNumber?: number;
};

export function ResumePreview({file, pageNumber = 1}: ResumePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(400);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.offsetWidth);
        }
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                border: '1px solid #ccc',
                borderRadius: 8,
                overflow: 'hidden',
                width: '100%',
                display: 'inline-block',
                verticalAlign: 'top',
            }}
        >
            <Document
                file={file}
                loading={<div>Loading PDF...</div>}
                error={<div>Failed to load PDF.</div>}
                onLoadError={(error) => console.error('PDF load error:', error)}
            >
                <Page pageNumber={pageNumber} width={width} renderTextLayer={false} renderAnnotationLayer={false}/>
            </Document>
        </div>

    );
}
