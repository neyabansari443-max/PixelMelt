import JSZip from 'jszip';
// file-saver imported dynamically

/**
 * Creates a ZIP file from an array of files and triggers a download.
 * @param {Array<{name: string, blob: Blob}>} files - Array of files to include in the ZIP.
 * @param {string} zipFilename - The name of the ZIP file to download.
 */
export const downloadZip = async (files, zipFilename = 'converted-images.zip') => {
    const zip = new JSZip();

    files.forEach((file) => {
        zip.file(file.name, file.blob);
    });

    try {
        const { saveAs } = await import('file-saver');
        const content = await zip.generateAsync({ type: 'blob' });
        saveAs(content, zipFilename);
    } catch (error) {
        console.error('Error generating ZIP file:', error);
        throw new Error('Failed to generate ZIP file.');
    }
};
