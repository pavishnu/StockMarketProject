using StockMarket.ExcelAPI.Models;
using StockMarket.ExcelAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockMarket.ExcelAPI.Services
{
    public class UploadService : IUploadRepository
    {
        private UploadRepository repository;
        public UploadService(UploadRepository context)
        {
            this.repository = context;
        }
       // UploadRepository repository = new UploadRepository();
        public void UploadData(string path)
        {
            repository.ImportStockPrice(path);
        }
        public void ExportData(string path)
        {
            repository.ExportStockPrice(path);
        }

        public IList<StockPrice> ImportStockPrice(string filePath)
        {
            return ((IUploadRepository)repository).ImportStockPrice(filePath);
        }

        public string ExportStockPrice(string filePath)
        {
            return ((IUploadRepository)repository).ExportStockPrice(filePath);
        }
    }
}
