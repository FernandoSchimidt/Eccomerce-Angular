package fernandoschimidt.eccomercespring.service;

import fernandoschimidt.eccomercespring.model.ProductCategory;
import fernandoschimidt.eccomercespring.repository.ProductCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductCategoryService {

    private final ProductCategoryRepository productCategoryRepository;

    public ProductCategoryService(ProductCategoryRepository productCategoryRepository) {
        this.productCategoryRepository = productCategoryRepository;
    }

    public ProductCategory create(ProductCategory obj) {
        return productCategoryRepository.save(obj);
    }

    public List<ProductCategory> listCategories() {
        return productCategoryRepository.findAll();
    }
}
