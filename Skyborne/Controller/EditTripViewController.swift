//
//  EditTripViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/7/17.
//  Copyright © 2017 Skyborne Co. All rights reserved.
//

import UIKit

class EditTripViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.title = "Edit Trip"
        navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(cancel))
        navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .done, target: self, action: #selector(done))

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    // MARK: Navigation Bar Actions
    
    func cancel() {
        dismiss(animated: true, completion: nil)
    }
    
    func done() {
        // TODO: Save To Persistent Storage
    }

}
