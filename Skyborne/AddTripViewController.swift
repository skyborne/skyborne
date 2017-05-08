//
//  AddTripViewController.swift
//  Skyborne
//
//  Created by Dominic Philip on 5/6/17.
//  Copyright © 2017 Skyborne Co. All rights reserved.
//

import UIKit

class AddTripViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()

        navigationItem.leftBarButtonItem = UIBarButtonItem(barButtonSystemItem: .cancel, target: self, action: #selector(cancel))
        navigationItem.rightBarButtonItem = UIBarButtonItem(title: "Add", style: .done, target: self, action: #selector(add))
    }

    // MARK: Navigation Bar Actions
    
    func add() {
        // TODO: Implement Add Trip
    }
    
    func cancel() {
        self.dismiss(animated: true, completion: nil)
    }
}
