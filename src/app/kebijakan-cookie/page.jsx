import React from 'react';
import ResetCookie from "../../components/ResetCookie";

export const metadata = {
    title: 'Kebijakan Cookie | Indoipo - Analisa IPO dengan Mudah',
    description: 'Dapatkan informasi yang mudah dimengerti mengenai IPO terbaru. Lihat PER, PBV, DER, ROE, dan metrik-metrik lainnya untuk membantu ada dalam menentukan investasi anda. Indoipo membantu anda dalam menyediakan metrik-metrik serta informasi keuangan dari perusahaan yang sedang IPO dalam bentuk yang sederhana.'
}

function KebijakanCookie(props) {

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12'>
                <h1 className="text-2xl font-semibold mb-2">Kebijakan Cookie</h1>
                <p className="mb-4">Terakhir diperbarui: 2 Februari 2024</p>
                <p className="mb-4">Website ini menggunakan Google Analytics untuk mengumpulkan data tentang
                    penggunaan website. Kami ingin memberitahu Anda bahwa kami tidak menyimpan data pribadi dari
                    pengguna.</p>
                <h2 className="text-xl font-semibold mb-2">Penggunaan Google Analytics</h2>
                <p className="mb-4">Kami menggunakan layanan Google Analytics untuk melacak dan menganalisis bagaimana pengguna berinteraksi dengan website ini. Google Analytics menggunakan cookies untuk mengumpulkan informasi tentang aktivitas pengguna. Informasi yang dikumpulkan oleh Google Analytics tidak mengandung data pribadi yang dapat mengidentifikasi pengguna secara pribadi.
                    Data yang dikumpulkan melalui Google Analytics mencakup informasi seperti alamat IP, jenis peramban, sistem operasi, laman yang dikunjungi, waktu dan tanggal kunjungan, dan informasi lain yang berkaitan dengan interaksi pengguna dengan website. Informasi ini digunakan untuk menganalisis tren penggunaan dan membantu kami meningkatkan pengalaman pengguna di website kami.</p>
                <h1 className="text-xl font-semibold mb-2">Perubahan pada Kebijakan Cookie Ini</h1>
                <p className="mb-4">Kami dapat memperbarui Kebijakan Cookie kami dari waktu ke waktu. Kami akan
                    memberitahu Anda tentang setiap perubahan dengan memposting Kebijakan Cookie yang baru pada halaman
                    ini.</p>
                <p className="mb-4">Anda dapat mengatur ulang pengaturan Cookie anda di situs ini dengan menekan <ResetCookie></ResetCookie> ini.</p>
                <p className="mb-4">Kami menyarankan Anda untuk secara berkala meninjau Kebijakan Cookie ini untuk
                    memeriksa perubahan. Perubahan pada Kebijakan Cookie ini efektif saat diposting pada halaman
                    ini.</p>
                <p className="mb-4">Terima kasih telah mengunjungi website kami.</p>
            </div>
        </section>
    );
}

export default KebijakanCookie;