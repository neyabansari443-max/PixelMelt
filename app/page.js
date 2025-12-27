"use client";

import { useState } from 'react';
import Dropzone from '@/components/Dropzone';
import SettingsBar from '@/components/SettingsBar';
import FileList from '@/components/FileList';
import AdsterraBanner from '@/components/AdsterraBanner';
import { convertHeicToFormat } from '@/utils/converter';
import { downloadZip } from '@/utils/zip';
// file-saver imported dynamically

export default function Home() {
  const [files, setFiles] = useState([]);
  const [format, setFormat] = useState('image/jpeg');
  const [quality, setQuality] = useState(0.8);
  const [isConverting, setIsConverting] = useState(false);

  const handleFilesAdded = async (newFiles) => {
    const filesWithStatus = newFiles.map(file => ({
      file,
      name: file.name.replace(/\.(heic|heif)$/i, ''),
      size: file.size,
      status: 'pending', // pending, converting, done, error
      blob: null,
      outputFormat: format
    }));

    setFiles(prev => [...prev, ...filesWithStatus]);
  };

  const convertFiles = async () => {
    setIsConverting(true);
    const newFiles = [...files];

    for (let i = 0; i < newFiles.length; i++) {
      if (newFiles[i].status !== 'done') {
        newFiles[i].status = 'converting';
        setFiles([...newFiles]);

        try {
          const blob = await convertHeicToFormat(newFiles[i].file, format, quality);
          newFiles[i].blob = blob;
          newFiles[i].status = 'done';
          newFiles[i].outputFormat = format;
        } catch (error) {
          console.error(error);
          newFiles[i].status = 'error';
        }
        setFiles([...newFiles]);
      }
    }
    setIsConverting(false);
  };

  const handleDownload = async (fileItem) => {
    if (fileItem.blob) {
      const { saveAs } = await import('file-saver');
      const ext = fileItem.outputFormat.split('/')[1];
      saveAs(fileItem.blob, `${fileItem.name}.${ext}`);
    }
  };

  const handleDownloadAll = () => {
    const completedFiles = files.filter(f => f.status === 'done' && f.blob);
    if (completedFiles.length > 0) {
      const filesToZip = completedFiles.map(f => ({
        name: `${f.name}.${f.outputFormat.split('/')[1]}`,
        blob: f.blob
      }));
      downloadZip(filesToZip, 'pixelmelt-converted.zip');
    }
  };

  const handleClearAll = () => {
    setFiles([]);
  };

  const handleRemoveFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Convert HEIC to JPG <br />
            <span className="text-blue-600">Securely in Browser</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Free, fast, and secure. Your photos never leave your device.
            Convert unlimited HEIC files to JPG, PNG, or WEBP instantly.
          </p>

          <Dropzone onFilesAdded={handleFilesAdded} fileCount={files.length} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">
        <AdsterraBanner />

        {files.length > 0 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SettingsBar
              format={format}
              setFormat={setFormat}
              quality={quality}
              setQuality={setQuality}
            />

            <div className="flex justify-center mt-8">
              <button
                onClick={convertFiles}
                disabled={isConverting}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isConverting ? 'Converting...' : 'Convert Images'}
              </button>
            </div>

            <FileList
              files={files}
              onRemove={handleRemoveFile}
              onDownload={handleDownload}
              onDownloadAll={handleDownloadAll}
              onClearAll={handleClearAll}
            />
          </div>
        )}

        {/* SEO Content */}
        <section className="mt-20 prose dark:prose-invert max-w-none">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">How to convert HEIC to JPG on Windows & iPhone?</h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Upload:</strong> Drag and drop your HEIC files from your iPhone, Mac, or Windows PC into the box above.</li>
                <li><strong>Select Format:</strong> Choose JPG, PNG, or WEBP as your target format.</li>
                <li><strong>Adjust Quality:</strong> Use the slider to balance between high quality and small file size.</li>
                <li><strong>Convert:</strong> Click "Convert Images" to start the bulk conversion process.</li>
                <li><strong>Download:</strong> Save your converted photos individually or download them all as a ZIP file.</li>
              </ol>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Why use PixelMelt for HEIC conversion?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li><strong>Secure & Private:</strong> Your photos are processed locally in your browser and never uploaded to any server.</li>
                <li><strong>Bulk Conversion:</strong> Convert hundreds of HEIC photos from your iPhone or Android in seconds.</li>
                <li><strong>Cross-Platform:</strong> Works perfectly on Windows 10/11, macOS, iOS, and Android without installing software.</li>
                <li><strong>Offline Support:</strong> Install PixelMelt as a PWA and use it offline on your laptop or mobile.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is it really free?", a: "Yes, PixelMelt is 100% free to use with no hidden charges." },
              { q: "Do you store my photos?", a: "No! Your photos never leave your computer or phone. All processing happens in your browser." },
              { q: "Can I convert multiple files?", a: "Absolutely. You can select or drag multiple HEIC files at once." },
              { q: "Does it work on iPhone?", a: "Yes, PixelMelt works perfectly on iPhone, iPad, Android, Windows, and Mac." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium text-gray-700 dark:text-gray-200">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-50 dark:border-gray-700/50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        <AdsterraBanner />
      </div>
    </div>
  );
}
