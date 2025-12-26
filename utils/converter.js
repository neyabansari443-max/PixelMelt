// heic2any imported dynamically

/**
 * Converts a HEIC file to the specified format and quality.
 * @param {File} file - The HEIC file to convert.
 * @param {string} format - The target format (e.g., 'image/jpeg', 'image/png', 'image/webp').
 * @param {number} quality - The quality of the output image (0 to 1).
 * @returns {Promise<Blob>} - The converted image as a Blob.
 */
export const convertHeicToFormat = async (file, format = 'image/jpeg', quality = 0.8) => {
    try {
        const heic2any = (await import('heic2any')).default;

        const blob = await heic2any({
            blob: file,
            toType: format,
            quality: quality,
        });

        // heic2any returns an array if the input is a multi-frame image.
        // We return the first frame in that case.
        return Array.isArray(blob) ? blob[0] : blob;
    } catch (error) {
        console.error('Error converting HEIC file:', error);
        throw new Error('Failed to convert HEIC file.');
    }
};
